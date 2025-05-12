export const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNfjuqG2iXfpwF_LZOvXFhK8iyXfnkM-QXMc9CyIy-7YFnTDxayYCGBqCZX-zpEFzYKo&usqp=CAU"
          alt="logo"
          className="logo"
        />
      </a>
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">Details</li>
        <li className="nav-item">Contact Us</li>
        <li className="nav-item">Card</li>
      </ul>
    </div>
  );
};