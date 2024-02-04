import toast from 'react-hot-toast';

export const SearchBar = ({onSearch}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.searchQuery.value.trim() === '') {
      toast.error('Query field can`t be empty.')
      return
    }
    onSearch(e.target.elements.searchQuery.value)
    e.target.reset();
 }

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  )
}