import "./styles.css"

export default function App() {
  return <form className="new-itemform">
    <div className="form-row">
      <label html>New Item</label>
      <input type="text" id="item" />
    </div>
  </form>
}