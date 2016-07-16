FROM fedora:23
RUN \
    dnf update --assumeyes && \
    dnf install --assumeyes node npm && \
    dnf update --assumeyes && \
    dnf clean all
CMD \
    