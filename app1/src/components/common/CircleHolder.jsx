import Circle from "./Circle"

const nums = Array(5).fill(0).map((n,i) => i+9)

const CircleHolder = props => {
    return (
        <div>
            <h3>Circle Holder</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    nums.map(n => <Circle key={n} num={n} />)
                }
            </div>
        </div>
    )
}

export default CircleHolder
