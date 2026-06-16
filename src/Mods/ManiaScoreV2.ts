import { IMod, ModBitwise, ModType } from 'osu-classes';

export class ManiaScoreV2 implements IMod {
  name = 'Score V2';

  acronym = 'V2';

  bitwise: ModBitwise = ModBitwise.ScoreV2;

  type: ModType = ModType.System;

  multiplier = 1;

  isRanked = false;

  isUserPlayable = true;

  incompatibles: ModBitwise = ModBitwise.None;
}
