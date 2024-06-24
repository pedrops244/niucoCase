"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obfuscateEmail = void 0;
// src/utils/emailUtils.ts
const obfuscateEmail = (email) => {
    const [alias, domain] = email.split('@');
    if (domain === 'niuco.com.br')
        return email;
    const visibleStart = alias.slice(0, 2);
    const visibleEnd = alias.slice(-2);
    const middleLength = Math.min(alias.length - 4, 8);
    const obfuscatedMiddle = '*'.repeat(middleLength);
    return `${visibleStart}${obfuscatedMiddle}${visibleEnd}@${domain}`;
};
exports.obfuscateEmail = obfuscateEmail;
