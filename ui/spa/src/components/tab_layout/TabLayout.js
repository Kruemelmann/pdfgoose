import './TabLayout.css';

import FileBrowser from '../file_browser/FileBrowser.js';
import PdfRenderer from '../pdfrenderer/PdfRenderer.js';

function TabLayout({tab_property}) {

  return (
    <div className="TabLayout">
        {tab_property.filebrowser_active == true
          ? <FileBrowser />
          : <PdfRenderer />
        }
    </div>
  );
                //{tab_property.openPDFPath}
}

export default TabLayout;
