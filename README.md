# ELUNA 2019 DevDay+: Advanced Development Workshop

## Day 0 Preparation:

### Initial setup
1. Download and Install [Docker Community Edition](https://www.docker.com/products/docker-engine) for your machine platform.
1. Clone this repository: `git clone https://github.com/NYULibraries/eluna-2019-devday-advanced-workshop`
1. With Docker running, build the Docker image.  
      ```sh
      # For a faster build, you can "pull" our copy of the image from a repository first
      docker pull quay.io/nyulibraries/eluna-2019-devday-advanced-workshop
      docker-compose build
      ```
1. Run the container service
      ```sh
      # The 'up' command will deploy an dependent services,
      # and run with the service's ports enabled and mapped to the host.
      docker-compose up web
      ```
1. Navigate to `http://localhost:8003/primo-explore/search?vid=NYU` to see the basic VIEW up and running!
