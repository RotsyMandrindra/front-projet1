import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GrapheurEvolutionPatrimoine = () => {
  const [patrimoinesVisualisables, setPatrimoinesVisualisables] = useState(null);
  const [grapheImage, setGrapheImage] = useState(null);

  useEffect(() => {
    const fetchPatrimoinesData = async () => {
      try {
        const response = await axios.get('/api/patrimoines');
        setPatrimoinesVisualisables(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des données patrimoniales:', error);
      }
    };

    fetchPatrimoinesData();
  }, []);

  useEffect(() => {
    if (patrimoinesVisualisables?.evolutionPatrimoine) {
      generateGrapheImage(patrimoinesVisualisables.evolutionPatrimoine);
    }
  }, [patrimoinesVisualisables]);

  const generateGrapheImage = async (data) => {
    try {
      const response = await axios.post('/api/generate-graphe', { data });
      const blob = new Blob([response.data], { type: 'image/png' });
      const url = window.URL.createObjectURL(blob);
      setGrapheImage(url);
    } catch (error) {
      console.error('Erreur lors de la génération du graphique:', error);
    }
  };

  return (
    <div>
      {grapheImage && <img src={grapheImage} alt="Évolution du patrimoine" />}
    </div>
  );
};

export default GrapheurEvolutionPatrimoine;
