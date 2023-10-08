
const styles = {
    border: '1px solid #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75px',
    width: '75px',
    borderRadius: '50%',
    margin: '0 5px'
}

const Circle = props => {
    const { num } = props
    return (
        <div style={styles}>
            {num}
        </div>
    )
}

export default Circle
