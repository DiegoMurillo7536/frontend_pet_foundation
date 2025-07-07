import React, { useState, useEffect } from 'react';
import { Foundation, FoundationResponse } from 'types/foundation';
import { get_all_foundations } from 'services/foundations/foundation';
import Card from 'components/card';

const FoundationsList: React.FC = () => {
  const [foundations, setFoundations] = useState<Foundation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFoundations = async () => {
      try {
        setLoading(true);
        const response: FoundationResponse = await get_all_foundations();
        setFoundations(response.data.foundations);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar las fundaciones');
      } finally {
        setLoading(false);
      }
    };

    fetchFoundations();
  }, []);

  if (loading) {
    return <div>Cargando fundaciones...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {foundations.map((foundation) => (
        <Card key={foundation.id} foundation={foundation} />
      ))}
    </div>
  );
};

export default FoundationsList;