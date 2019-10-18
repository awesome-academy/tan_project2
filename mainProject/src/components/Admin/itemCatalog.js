import React, { Component } from "react";
//import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class ItemsCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classModal: "modal-container",
            file: '',
            imagePreviewUrl: ''
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.nameRef = React.createRef();
        this.priceRef = React.createRef();
        this.descRef = React.createRef();
    }

    openModal() {
        this.setState({
            classModal: "modal-container one"
        })
    }

    closeModal(e) {
        this.setState({
            classModal: "modal-container one out"
        })
        this.onEdit(e);
    }

    onEdit = (e) => {
        let name = this.nameRef.current.value;
        let price = this.priceRef.current.value;
        let desc = this.descRef.current.value;
        let img = this.state.file.name;
        console.log("edit id: ", e.target.dataset.idproduct);
        console.log({id:e.target.dataset.idproduct, productName: name, image: img, price: price, decription: desc})
    }
    onDelete = (data) => {
        if (confirm('Bạn chắc chắn muốn xoá:' + ' ' + data)) { // eslint-disable-line
            console.log(data)
        }
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    // componentDidMount() {
    //     window.addEventListener("click", function(e){
    //         if (e.target.dataset.name === "bgModal") {
    //             this.closeModal.bind(this);
    //         }
    //     })
    // }

    render() {
        const { index, id, productName, price, image, decription } = this.props;
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt="dfdd"/>);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
            <tr>
                <td>
                    <div className={this.state.classModal}>
                        <div data-name="bgModal" className="modal-background">
                            <div className="modal">
                                <div className="modal_input">
                                    <span> Tên: </span>
                                    <input defaultValue={productName} ref={this.nameRef} type="text" />
                                </div>
                                <div className="modal_input">
                                    <span> Giá: </span>
                                    <input defaultValue={price} ref={this.priceRef} type="number" />
                                </div>
                                <div className="modal_input">
                                    <span> Category: </span>
                                    <select>
                                        <option value="1"> Rượu Vang </option>
                                        <option value="2"> Rượu Ngoại </option>
                                    </select>
                                </div>
                                <div className="modal_input">
                                    <span> Mô tả: </span>
                                    <textarea rows="4" cols="50" defaultValue={decription} ref={this.descRef}></textarea>
                                </div>
                                <div>
                                    <div className="previewComponent">
                                        <form onSubmit={(e) => this._handleSubmit(e)}>
                                            <input className="fileInput"
                                                type="file"
                                                onChange={(e) => this._handleImageChange(e)} />
                                        </form>
                                        <div className="imgPreview">
                                            {$imagePreview}
                                        </div>
                                    </div>
                                </div>
                                <div className="modal_btn">
                                    <button className="btn btn__cart" type="button" data-idproduct={id} onClick={this.closeModal}> Close Modal </button>
                                    <button className="btn btn__cart" type="button" data-idproduct={id} onClick={this.closeModal}> Save </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {parseInt(index) + 1}
                </td>
                <td>
                    {productName}
                </td>
                <td>
                    {price}
                </td>
                <td>
                    <img src={"/images/" + image} alt={image + "hehe"} />
                </td>
                <td>
                    {decription}
                </td>
                <td>
                    <button type="button" className="catalogBtn btn_delete" onClick={this.onDelete.bind(this, productName)}>
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                    <button type="button" className="catalogBtn btn_edit" onClick={this.openModal}>
                        <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
                    </button>
                </td>

            </tr>
        )
    }
}

export default ItemsCatalog;
