import { obfuscateEmail } from '../../src/utils/emailUtils';

test('should obfuscate email correctly', () => {
  expect(obfuscateEmail('maria.oliveira@gmail.com')).toBe(
    'ma********ra@gmail.com',
  );
  expect(obfuscateEmail('joao.silva@niuco.com.br')).toBe(
    'joao.silva@niuco.com.br',
  );
  expect(obfuscateEmail('pedro.santos@yahoo.com')).toBe(
    'pe********os@yahoo.com',
  );
  expect(obfuscateEmail('claudia.rodrigues@outlook.com')).toBe(
    'cl********es@outlook.com',
  );
  expect(obfuscateEmail('luiz.almeida@empresa.com')).toBe(
    'lu********da@empresa.com',
  );
  expect(obfuscateEmail('abcdefghi@example.com')).toBe('ab*****hi@example.com');
});
