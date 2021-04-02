const colors = ["#b33a3a", "#e0770d", "#43c00b"]

export default (priority) => {
    const level = ["High", "Medium", "Low"]
    return {
        level:(level [priority-1]),
        color:colors[priority-1]
    }
}