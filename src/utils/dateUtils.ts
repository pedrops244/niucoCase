export const formatUnixEpochToISO = (epoch: number | null): string => {
  if (epoch === null) {
    throw new Error('Epoch cannot be null');
  }

  const date = new Date(epoch * 1000);
  const isoString = date.toISOString();

  const formattedDate = new Date(isoString).toLocaleString('en-US', {
    timeZone: 'America/Sao_Paulo',
    hour12: false,
  });

  return formattedDate;
};
