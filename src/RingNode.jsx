function RingNode({node}){
    return (
        <div className="flex flex-row p-2 border-b border-red-500">
            <span className="basis-1/5">{node.name}</span>
            <span className="basis-1/5">{node.ringToken}</span>
            <span className="basis-1/5">{node.address}</span>
            <span className="basis-1/5">{node.meta}</span>
            <span className="basis-1/5">{node.rpc}</span>
        </div>
    )
}

export default RingNode