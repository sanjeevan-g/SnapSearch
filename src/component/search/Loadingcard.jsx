import "./loading.scss"

export function LoadingCard() {
    return (
        <div className="loading-card">

        </div>
    )
}


export function LoadCardGrid() {
    return (
        <div className="card-grid">
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
        </div>
    )
}