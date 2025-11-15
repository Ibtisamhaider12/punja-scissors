import { useState, useEffect, useCallback, useRef } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';
import { useSearch } from '@/contexts/SearchContext';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { searchQuery, setSearchQuery, performSearch, searchResults } = useSearch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Debounced search function
  const debouncedSearch = useCallback((query: string) => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      if (query.trim()) {
        performSearch(query);
      }
    }, 300);
  }, [performSearch]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && searchResults.length > 0) {
      navigate(searchResults[0].path);
      setSearchQuery('');
      setIsFocused(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim()) {
      debouncedSearch(value);
    }
  };

  const handleSelect = (path: string) => {
    if (path) {
      navigate(path);
      setSearchQuery('');
      setIsFocused(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  const showResults = isFocused && searchQuery.trim() && searchResults.length > 0;

  return (
    <div ref={searchContainerRef} className="relative flex-1 max-w-md">
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
        <Input
          type="text"
          placeholder={t('search.placeholder')}
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          className={cn(
            "pl-10 pr-10 bg-surface/50 backdrop-blur-sm border-border/50 focus:border-secondary/50 focus:ring-2 focus:ring-secondary/20 transition-all",
            isFocused && "bg-surface border-secondary/30"
          )}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setIsFocused(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors z-10"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </form>

      {/* Inline Search Results Dropdown */}
      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="text-xs font-medium text-muted-foreground px-3 py-2 mb-1">
              {t('search.results', 'Search Results')}
            </div>
            {searchResults.slice(0, 6).map((result) => {
              const displayTitle = result.titleKey ? t(result.titleKey) : result.title;
              const displayCategory = result.categoryKey ? t(result.categoryKey) : result.category;
              return (
                <button
                  key={result.id}
                  onClick={() => handleSelect(result.path)}
                  className="w-full text-left px-3 py-2.5 rounded-md hover:bg-accent transition-colors group flex items-center justify-between"
                >
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="font-medium text-foreground group-hover:text-secondary transition-colors truncate">
                      {displayTitle}
                    </span>
                    <span className="text-xs text-muted-foreground truncate">
                      {displayCategory}
                    </span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors ml-2 flex-shrink-0" />
                </button>
              );
            })}
            {searchResults.length > 6 && (
              <div className="text-xs text-muted-foreground px-3 py-2 text-center border-t border-border mt-1">
                {`+${searchResults.length - 6} ${t('search.moreResults', 'more results')}`}
              </div>
            )}
          </div>
        </div>
      )}

      {/* No Results Message */}
      {isFocused && searchQuery.trim() && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-xl z-50 p-4">
          <div className="text-sm text-muted-foreground text-center">
            {t('search.noResults', 'No results found. Try different keywords.')}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
