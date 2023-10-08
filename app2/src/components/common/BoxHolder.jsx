import Box from "./Box";

const nums = Array(5).fill(0).map((n,i) => i+1)



const BoxHolder = props => {
    return (
        <div style={{textAlign:'center'}}>
            <h3>Box Holder</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    nums.map(n => <Box key={n} num={n} />)
                }
            </div>
        </div>
    )
}

export default BoxHolder
