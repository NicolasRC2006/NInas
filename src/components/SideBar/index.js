import Button from "../../components/Button";

const SideBar = ({ isOpen, onClose, content }) => {
  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar'}>
      <Button name="Close" onClick={onClose} />
      <ul>
        {content}
        </ul>
    </div>
  );
};
export default SideBar;

