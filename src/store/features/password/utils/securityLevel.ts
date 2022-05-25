export const securityLevels = {
  veryUnreliable: { name: 'ОЧЕНЬ НЕНАДЕЖНЫЙ', color: '#f5203e', level: 4 },
  unreliable: { name: 'НЕНАДЕЖНЫЙ', color: '#f5203e', level: 8 },
  good: { name: 'ХОРОШИЙ', color: '#f1c80b', level: 11 },
  reliable: { name: 'НАДЕЖНЫЙ', color: '#43ed9c', level: 14 },
  veryReliable: { name: 'ОЧЕНЬ НАДЕЖНЫЙ', color: '#0070f6', level: 16 },
};

export type SecurityLevel = {
  name: string;
  color: string;
  level: number;
};
