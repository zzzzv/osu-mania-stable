import { IMod, ModBitwise, ModType } from 'osu-classes';

export class ManiaFadeIn implements IMod {
  name = 'Fade In';

  acronym = 'FI';

  bitwise: ModBitwise = ModBitwise.FadeIn;

  type: ModType = ModType.DifficultyIncrease;

  multiplier = 1;

  isRanked = true;

  isUserPlayable = true;

  incompatibles: ModBitwise = ModBitwise.Hidden | ModBitwise.Flashlight;
}
