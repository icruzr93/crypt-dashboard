echo "Deploying to S3"

STAGING_BRANCH="master"
PRODUCTION_BRANCH="develop"
REGION="us-east-1"

docker run --env AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID --env AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY --env AWS_DEFAULT_REGION=${REGION} my-crypto-react-prod