Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '705856019680-nf3204ha8sl1kplcaic8itttov0qlg9i.apps.googleusercontent.com', 'HCTOrTFBITqdGJD07y3GEZb7', {
    :scope => 'email,profile'}
end