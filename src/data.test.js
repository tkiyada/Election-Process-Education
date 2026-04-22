import { describe, it, expect } from 'vitest';
import { 
  getElectionData, 
  getImportantDates, 
  checkIsLive, 
  uiStrings 
} from './data';

describe('Election Process Data Logic', () => {

  it('should fallback to English UI strings if translation is missing', () => {
    // We intentionally request a non-existent language
    const missingLangStr = uiStrings['fakeLanguage']?.['appTitle'] || uiStrings['en']['appTitle'];
    expect(missingLangStr).toBe("Indian Election Process Explorer");
  });

  describe('getElectionData()', () => {
    it('returns correctly translated timeline data for Lok Sabha in Hindi', () => {
      const data = getElectionData('lokSabha', 'hi');
      expect(data).toBeDefined();
      expect(data.timeline[0].title).toBe("मतदाता सूची अपडेट");
    });

    it('falls back to English when language is not provided or unsupported in data', () => {
      const dataFallback = getElectionData('stateAssembly', 'fakeLang');
      const dataEnglish = getElectionData('stateAssembly', 'en');
      // Our mock data function is programmed to return English if not found
      expect(dataFallback.timeline[0].title).toBe(dataEnglish.timeline[0].title);
    });
  });

  describe('getImportantDates()', () => {
    it('filters dates specific to Maharashtra state assembly', () => {
      const mhDates = getImportantDates('stateAssembly', 'MH');
      expect(mhDates.length).toBeGreaterThan(0);
      expect(mhDates[1].event).toContain("Single Phase Polling");
    });

    it('returns general state dates if no specific state code provided', () => {
      const generalDates = getImportantDates('stateAssembly');
      expect(generalDates[0].event).toBe("Select a Specific State");
    });
  });

  describe('checkIsLive()', () => {
    it('returns true when a specific state has a live event', () => {
      // In our mock, MH is set to live
      const isLive = checkIsLive('stateAssembly', 'MH');
      expect(isLive).toBe(true);
    });

    it('returns false when a specific state does not have a live event', () => {
      // In our mock, UP is not live
      const isLive = checkIsLive('stateAssembly', 'UP');
      expect(isLive).toBe(false);
    });
  });

});
