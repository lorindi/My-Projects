async function getTickets() {
    try {
        const res = await fetch('http://localhost:4000/tickets', {
            next: {
                revalidate: 30
            }
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error('Fetch failed:', error);
        return []; // Return an empty array or handle the error as needed
    }
}

export default async function TicketList() {
    const tickets = await getTickets();
    return (
        <>
            {tickets.length > 0 ? (
                tickets.map((ticket) => (
                    <div key={ticket.id} className="card my-5">
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div>{ticket.priority} priority</div>
                    </div>
                ))
            ) : (
                <p className="text-content">There are no open tickets, yay!</p>
            )}
        </>
    );
}
