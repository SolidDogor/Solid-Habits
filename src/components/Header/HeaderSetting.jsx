import './HeaderSetting.css';

export default function HeaderIcon({imagePath, settingName}) {
    return (
        <button>
            <img
                src={imagePath}
                alt={settingName}
                className='header-setting'
            />
        </button>
    );
}