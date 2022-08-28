import { CURRENTLINE, CYAN, ORANGE, PINK, RED } from '../../helpers/colors';

const Contacts = () => {
    return (
        <>
            <section className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3">
                                <button className="btn mx-2" style={{ backgroundColor: PINK }}>
                                    ساخت مخاطب جدید
                                    <i className="fa fa-plus-circle mx-2"></i>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card my-2' style={{ backgroundColor: CURRENTLINE }}>
                            <div className='cqrd-body'>
                                <div className='row align-items-center d-flex justify-content-around'>
                                    <div className='col-md-4 col-sm-4'>
                                        <img className='img-fluid rounded'
                                            src='https://via.placeholder.com/200' alt=''
                                            style={{ border: '1px solid ${PURPLE}' }} />
                                    </div>
                                    <div className='col-md-7 col-sm-7'>
                                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-dark'>
                                                نام و نام خانوادگی: {" "}
                                                <span className='fw-bold'>
                                                    مهدی الراهیمی
                                                </span>
                                            </li>
                                            <li className='list-group-item list-group-item-dark'>
                                                شماره موبایل: {" "}
                                                <span className='fw-bold'>
                                                    09123456789
                                                </span>
                                            </li>
                                            <li className='list-group-item list-group-item-dark'>
                                                آدرس ایمیل: {" "}
                                                <span className='fw-bold'>
                                                    mef_ss@yahoo.com
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-'></div>
                                    <div className='col-md-1 cold-sm-1 d-flex flex-column align-items-center'>
                                        <button className='btn my-1' style={{ backgroundColor: ORANGE }}>
                                            <i className='fa fa-eye' />
                                        </button>
                                        <button className='btn my-1' style={{ backgroundColor: CYAN }}>
                                            <i className='fa fa-pen' />
                                        </button>
                                        <button className='btn my-1' style={{ backgroundColor: RED }}>
                                            <i className='fa fa-trash' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts;