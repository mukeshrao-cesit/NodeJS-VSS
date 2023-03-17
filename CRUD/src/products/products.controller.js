import productsModal from "./products.modal.js";

const projectionData = { isDeleted: 0, createdAt: 0, updatedAt: 0, __v: 0 };

export const getAllProducts = async (req, res) => {
  const { sort, page, limit } = req.query;
  console.log(sort, page, limit);
  if (sort && limit && page) {
    let skipValue = (page - 1) * limit;
    let result = await productsModal
      .find({}, projectionData)
      //   .sort({ productPrice: sort })
      .limit(limit)
      .skip(skipValue);
    res.send(result);
  }
};

export const createProduct = async (req, res) => {
  const { productName, productDescription, productPrice } = req.body;
  const newProduct = await productsModal({
    productName,
    productDescription,
    productPrice,
  });
  const saveProduct = await newProduct.save();
  res.send({ createdProduct: saveProduct });
};

export const deleteProduct = async (req, res) => {
  let Deleteproduct = await productsModal.findByIdAndDelete({
    _id: req.params.id,
  });
  res.send({ deletedProduct: Deleteproduct });
};

export const updateProduct = async (req, res) => {
  let updatedProduct = await productsModal.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productPrice: req.body.productPrice,
      },
    }
  );
  res.send({ updatedProduct: updatedProduct });
};
