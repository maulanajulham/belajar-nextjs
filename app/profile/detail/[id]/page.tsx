
import { use } from 'react';
export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
    return(
        <main>
            <h1>Profile Detail Page</h1>
            <p>This is profile detail page for spesifik detail with id: { id }.</p>
        </main>
    )
}