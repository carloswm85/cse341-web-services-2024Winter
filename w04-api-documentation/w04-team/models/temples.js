module.exports = (mongoose) => {
  const Temple = mongoose.model(
    'temples',
    mongoose.Schema(
      {
        temple_id: Number,
        additionalInfo: Boolean,
        name: String,
        location: String,
        dedicated: String
      },
      // Add: createdAt and updatedAt fields to the document
      { timestamps: true }
    )
  );

  return Temple;
};
