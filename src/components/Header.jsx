import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>☕ 오즈 카페</h1>
      <nav>
        <Link to='/'>메인</Link>
        <Link to='/cart'>장바구니</Link>
      </nav>
    </header>
  );
}
