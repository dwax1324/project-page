import { useTheme } from '../components/ThemeProvider'

const About = () => {
    const darkTheme = useTheme();
    return (
        <div style={{
            minHeight: window.screen.height,
            backgroundColor: darkTheme ? "#111" : "#fff",
        }}>
            about page
        </div>
    )
}

export default About