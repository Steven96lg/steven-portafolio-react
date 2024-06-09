
export const GradientTextComponent = ({text, size, gradient = true}) => {

    if(size === "S") size = "26px"
    if(size === "M") size = "36px"
    if(size === "L") size = "46px"

    let textGradient = gradient ? {
        background: "linear-gradient(to right, #E84130, #9223B9)",
        WebkitBackgroundClip: "text",
        color: "transparent"
    } : {}

    const styles = {
        fontSize: size,
        fontWeight: "800",
        marginBottom: "10px",
        ...textGradient
    }

    return <p style={styles}>{text}</p>
}