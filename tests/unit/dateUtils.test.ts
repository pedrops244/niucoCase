import { formatUnixEpochToISO } from '../../src/utils/dateUtils';

test('should format Unix Epoch to ISO string correctly', () => {
  expect(formatUnixEpochToISO(1622559600)).toBe('6/1/2021, 12:00:00');
});
