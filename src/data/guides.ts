import type { Guide } from '@/models/guide';
import { steelPathGuide } from '@/data/guides/1-steel-path';
import { beginnersGuide } from '@/data/guides/2-beginners';
import { newWarframesGuide } from '@/data/guides/3-new-warframes';
import { weaponsGuide } from '@/data/guides/4-weapons';
import { rivensGuide } from '@/data/guides/5-rivens';

const guides: Guide[] = [
  steelPathGuide,
  beginnersGuide,
  newWarframesGuide,
  weaponsGuide,
  rivensGuide,
];

export function getGuides(): Guide[] {
  return guides;
}
