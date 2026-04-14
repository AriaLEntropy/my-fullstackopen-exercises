const Filter = ({ searchTerm, onChange }) => {
  return (
    <div>
      filter shown with a: <input value={searchTerm} onChange={onChange} />
    </div>
  )
}

export default Filter