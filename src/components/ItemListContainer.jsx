/* eslint-disable react/prop-types */
const ItemListcontainer = ({ greeting }) => {
    return (
        <>
            <div className="text-center text-xl text-white pt-20">
                <span>{greeting}</span>
            </div>
        </>
    );
};

export default ItemListcontainer;
