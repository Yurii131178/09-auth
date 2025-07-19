import css from './SearchBox.module.css';

interface SearchBoxProps {
  onSearch: (value: string) => void;
  value: string;
}

const SearchBox = ({ value, onSearch }: SearchBoxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };
  return (
    <input
      value={value}
      onChange={handleChange}
      className={css.input}
      type="text"
      placeholder="Search notes"
    />
  );
};

export default SearchBox;
