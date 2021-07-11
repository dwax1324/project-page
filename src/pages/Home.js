import Card from '../components/Card.jsx';
import Upperbar from '../components/Upperbar.jsx'
import { useTheme } from '../components/ThemeProvider'






function Home() {
  const darkTheme = useTheme();
  return (
    <div style={{
      minHeight: window.screen.height,
      backgroundColor: darkTheme ? "#111" : "#fff"
    }}>
      home
    </div>
  );
}

export default Home;

/*

About

Choi Woojong , 최우종
SungKyunKwan University, 성균관대학교
major : biological science, 전공 : 생명과학과
double major : computer science, 복수전공: 융합소프트웨어연계전공



*/