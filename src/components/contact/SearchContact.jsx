const SearchContact = () => {
    return (
        <div className="input-group mx-2 w-75" dir="ltr">
            <span className="input-group-text" id="btnSearch" style={{ backgroundColor: "purple" }}>
                <i className="fas fa-search"></i>
            </span>
            <input dir="rtl" type="text" style={{ backgroundColor: "gray", borderColor: "purple" }}
                className="form-control" placeholder="جستجوی مخاطب" aria-label="Search"
                aria-describedby="btnSearch"
            ></input>
        </div>
    )
}

export default SearchContact;