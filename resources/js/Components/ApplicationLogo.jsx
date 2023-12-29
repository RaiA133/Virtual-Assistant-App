export default function ApplicationLogo(props) {
    const textStyle = {
        whiteSpace: 'pre',
        fill: 'rgb(51, 51, 51)',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16.1px',
    };

    return (
        <svg {...props} viewBox="0 0 89.589 50.718" xmlns="http://www.w3.org/2000/svg">
            <text style={textStyle} x="133.065" y="176.843" transform="matrix(5.431427001953125, 0, 0, 4.031102180480957, -716.9721069335938, -670.8435668945312)">v</text>
            <text style={{ ...textStyle, transformOrigin: '136.182px 197.329px' }} transform="matrix(-5.431230068207, 0.046245001256, -0.034322008491, -4.030955791473, -77.317376118937, -166.426717890721)" x="133.065" y="176.843" dy="26.2" dx="-0.955">v</text>
        </svg>
    );
}
