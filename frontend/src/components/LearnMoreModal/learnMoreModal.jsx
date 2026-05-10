import "./LearnMoreModal.css";

const LearnMoreModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>About ChainRaiser</h2>

        <p>
          ChainRaiser is a blockchain-based fundraising platform designed to bring 
          transparency, security, and trust to startup funding.
        </p>

        <h3>🚀 What We Do</h3>
        <ul>
          <li>Help startups raise funds directly from investors</li>
          <li>Allow investors to discover verified opportunities</li>
          <li>Remove middlemen using blockchain technology</li>
        </ul>

        <h3>🔒 Why It’s Different</h3>
        <ul>
          <li>All transactions are recorded on blockchain</li>
          <li>Funds are managed through smart contracts</li>
          <li>No hidden fees or manipulation</li>
        </ul>

        <h3>💡 For Founders</h3>
        <p>
          Launch campaigns, attract investors, and track funding progress in real time.
        </p>

        <h3>💰 For Investors</h3>
        <p>
          Invest in startups with full transparency and data-backed insights.
        </p>

      </div>
    </div>
  );
};

export default LearnMoreModal;