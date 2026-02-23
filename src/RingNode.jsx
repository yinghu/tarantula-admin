function RingNode({node}){
    return (
        <div className="flex flex-row p-2 border-b border-red-500">
            <span className="basis-1/3">{node.name}</span>
            <span className="basis-1/3">{node.ringToken}</span>
            <span className="basis-1/3">{node.address}</span>
        </div>
    )
}

export default RingNode