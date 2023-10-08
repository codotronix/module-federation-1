
const styles = {
    border: '1px solid #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75px',
    width: '75px',
    margin: '0 5px'
}

const Box = props => {
    const { num } = props
    return (
        <div style={styles}>
            {num}
        </div>
    )
}

export default Box
