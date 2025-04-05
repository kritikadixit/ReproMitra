import React from 'react'
import logo from '../../assets/Logo.png'
import { facebookfill,linkedinfill,instagramline,twitterfill } from '../../assets'
function Footer() {
  return (
    <section>
        <footer class="bg-gray-900 border-t border-gray-200">
        <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <img class="h-8 w-auto mb-4" src={logo}
                        alt="Logo" />
                    <p class="text-sm text-slate-200">Your trusted partner in reproductive health.</p>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-slate-100 mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-sm text-gray-400 hover:text-gray-300">About Us</a></li>
                        <li><a href="#" class="text-sm text-gray-400 hover:text-gray-300">Find a Doctor</a></li>
                        <li><a href="#" class="text-sm text-gray-400 hover:text-gray-300">Health Resources</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-slate-100 mb-4">Support</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-sm text-gray-400 hover:text-gray-300">Help Center</a></li>
                        <li><a href="#" class="text-sm text-gray-400 hover:text-gray-300">Contact Us</a></li>
                        <li><a href="#" class="text-sm text-gray-400 hover:text-gray-300">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-sm font-semibold text-slate-100 mb-4">Connect</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-gray-200">
                            <img src={facebookfill} alt="facebook" width="20" height="20" />
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-200">
                            <img src={twitterfill} alt="twitter" width="20" height="20" />
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-200">
                            <img src={instagramline} alt="instagram" width="20" height="20" />
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-200">
                            <img src={linkedinfill} alt="linkedin" width="20" height="20" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </section>
  )
}

export default Footer;