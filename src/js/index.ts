import { activeHrefSetup } from 'src/js/activeHref';
import { activeIdSetup } from 'src/js/activeId';
import { alignToViewportSetup } from 'src/js/alignToViewport';
import { detailsSetup } from 'src/js/details';
import { isInViewportSetup } from 'src/js/isInViewport';
import { konamiSetup } from 'src/js/konami';
import { trackingSetup } from 'src/js/tracking';

activeHrefSetup();
activeIdSetup();
alignToViewportSetup();
detailsSetup();
konamiSetup();
isInViewportSetup();
void trackingSetup();
