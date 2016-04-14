import Emitter from 'quill/core/emitter';
import Theme from 'quill/core/theme';
import Picker from 'quill/ui/picker';
import icons from 'quill/ui/icons';


class BaseTheme extends Theme {
  addModule(name) {
    let module = super.addModule(name);
    if (name === 'toolbar') {
      this.extendToolbar(module);
    }
    return module;
  }

  buildButtons(buttons) {
    buttons.forEach(function(button) {
      let className = button.getAttribute('class') || '';
      className.split(/\s+/).forEach((name) => {
        if (!name.startsWith('ql-')) return;
        name = name.slice('ql-'.length);
        if (icons[name] == null) return;
        if (typeof icons[name] === 'string') {
          button.innerHTML = icons[name];
        } else {
          let value = button.dataset.value || '';
          if (value != null && icons[name][value]) {
            button.innerHTML = icons[name][value];
          }
        }
      });
    });
  }
}
BaseTheme.DEFAULTS = {};


export default BaseTheme;
