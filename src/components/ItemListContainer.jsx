import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <div className="text-center text-6xl font-mono text-green-400 pt-28">
                <span className="border-2 bg-zinc-800 bg-opacity-75 border-green-500 rounded-md p-2">
                    {greeting}
                </span>
            </div>
        </>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;

