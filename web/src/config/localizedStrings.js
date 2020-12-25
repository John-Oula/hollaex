import LocalizedStrings from 'react-localization';

import en from './lang/en';
import ko from './lang/ko';
import fa from './lang/fa';
import ar from './lang/ar';
import fr from './lang/fr';
import es from './lang/es';
import ja from './lang/ja';
import vi from './lang/vi';
import id from './lang/id';

const strings = new LocalizedStrings({
	en,
	ko,
	ja,
	fa,
	ar,
	fr,
	es,
	vi,
	id,
});

export default strings;
