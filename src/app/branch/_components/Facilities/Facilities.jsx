import { Each } from "@/app/_components/Each/Each";
import style from "./Facilties.module.css";

const Facilities = ({ facilities }) => {
  return (
    <section className={style.page_section}>
      <div>
        <section className={style.facilities_box}>
          <div className={style.content}>
            <div className="header-content">
              <div>
                <h2 className="h2">
                  <div className="h2-content">Facilities</div>
                </h2>
              </div>
            </div>
            <div>
            <div className={style.property_section}>
              <div className={style.most_popular}>
                <div>
                  <div>
                    <div className={style.most_popular_header}>
                      <div className={style.most_popular_heading}>Most popular facilities</div>
                    </div>
                    <ul className={style.most_popular_list}>
                    <Each
                        of={facilities}
                        render={(item, index) => (
                          <li className={style.most_popular_list_item}>
                            <div>
                              <div className={style.most_popular_list_item_content}>
                                <span className={style.facility_icon_container}>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                                </span>
                                <div>
                                  <span>
                                    <div className={style.font_2}>
                                      <span>{item.name}</span>
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                        )}
                      />
                    </ul>
                  </div>
                </div>
              </div>
              <div className={style.facilities_box_content}>
                <div>
                  <div className={style.item}>
                    <div className={style.facility_title_container}>
                      <div className={style.font_1}>
                        <div className={style.facility_label}>
                          <span className={style.facility_icon_container}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z"></path></svg>
                          </span>
                            Relevant for your trip
                        </div>
                      </div>
                    </div>
                    <ul className={style.facility_list_container}>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Parking</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Private Bathroom</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block">
                  <div className={style.item}>
                    <div className={style.facility_title_container}>
                      <div className={style.font_1}>
                        <div className={style.facility_label}>
                          <span className={style.facility_icon_container}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.75 15h10.5l-.74-.873-.664 3.986a5.25 5.25 0 0 1-5.179 4.387H7.333a5.25 5.25 0 0 1-5.18-4.387l-.663-3.986L.75 15h4.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0-.74.873l.664 3.986A6.75 6.75 0 0 0 7.334 24h9.333a6.75 6.75 0 0 0 6.659-5.64l.664-3.987a.75.75 0 0 0-.74-.873h-10.5a.75.75 0 0 0 0 1.5zM12 19.5H6v-5.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v5.25zm0 1.5a1.5 1.5 0 0 0 1.5-1.5v-5.25A2.25 2.25 0 0 0 11.25 12h-4.5a2.25 2.25 0 0 0-2.25 2.25v5.25A1.5 1.5 0 0 0 6 21h6zm4.5-17.25a2.25 2.25 0 0 1 4.5 0v10.5a.75.75 0 0 0 1.5 0V3.75a3.75 3.75 0 1 0-7.5 0 .75.75 0 0 0 1.5 0zm-3 3a2.25 2.25 0 0 1 4.5 0l.75-.75h-6l.75.75zm-1.5 0c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75 3.75 3.75 0 1 0-7.5 0z"></path></svg>
                          </span>
                            Bathroom
                        </div>
                      </div>
                    </div>
                    <ul className={style.facility_list_container}>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Toilet Paper</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Towel</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Toilet</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Private Bathroom</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Free toiletries</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block">
                  <div className={style.item}>
                    <div className={style.facility_title_container}>
                      <div className={style.font_1}>
                        <div className={style.facility_label}>
                          <span className={style.facility_icon_container}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.999.75v22.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm3 0V7.5a2.259 2.259 0 0 1-2.252 2.25 2.258 2.258 0 0 1-2.248-2.252V.75a.75.75 0 0 0-1.5 0V7.5a3.76 3.76 0 0 0 3.748 3.75 3.76 3.76 0 0 0 3.752-3.748V.75a.75.75 0 0 0-1.5 0zm6.75 15.75h3c1.183.046 2.203-.9 2.25-2.111a2.22 2.22 0 0 0 0-.168c-.25-6.672-.828-9.78-3.231-13.533a1.508 1.508 0 0 0-2.77.81V23.25a.75.75 0 0 0 1.5 0V1.503c0 .003.001 0 .003 0a.006.006 0 0 1 .008.002c2.21 3.45 2.75 6.354 2.99 12.773v.053a.696.696 0 0 1-.721.67L15.749 15a.75.75 0 0 0 0 1.5z"></path></svg>
                          </span>
                            Bedroom
                        </div>
                      </div>
                    </div>
                    <ul className={style.facility_list_container}>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Wardrobe or closet</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Electric Kettle</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Fridge</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Air conditioner</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block">
                  <div className={style.item}>
                    <div className={style.facility_title_container}>
                      <div className={style.font_1}>
                        <div className={style.facility_label}>
                          <span className={style.facility_icon_container}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM12 15h8.5c.69 0 1.25.56 1.25 1.25v2.5l.75-.75H12l.75.75v-4.5L12 15zm0-1.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-2.5a2.75 2.75 0 0 0-2.75-2.75H12zm-10.5 6h21l-.75-.75v3l.75-.75h-21l.75.75v-3l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h21a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-21zm.75 5.25v-9a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0zm21 0v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zM19.4 6.001L19.403 6H15.1v.001l.562-4.5V1.5h3.176L19.4 6zm1.49-.187l-.564-4.5A1.5 1.5 0 0 0 18.838 0h-3.176a1.5 1.5 0 0 0-1.488 1.314l-.563 4.5A1.499 1.499 0 0 0 15.102 7.5H19.4a1.499 1.499 0 0 0 1.49-1.687zm-4.39.936v4.5a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-1.5 0z"></path></svg>
                          </span>
                            Room Amenities
                        </div>
                      </div>
                    </div>
                    <ul className={style.facility_list_container}>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Socket near the bed</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Electric Kettle</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Cushion chair</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block">
                  <div className={style.item}>
                    <div className={style.facility_title_container}>
                      <div className={style.font_1}>
                        <div className={style.facility_label}>
                          <span className={style.facility_icon_container}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.5 10.375v6.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25v-13a.25.25 0 0 1 .25-.25h20.5a.25.25 0 0 1 .25.25v6.5zm1.5 0v-6.5a1.75 1.75 0 0 0-1.75-1.75H1.75A1.75 1.75 0 0 0 0 3.875v13c0 .966.784 1.75 1.75 1.75h20.5a1.75 1.75 0 0 0 1.75-1.75v-6.5zm-16.5 12h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5zm3.75-4.5v3.75a.75.75 0 0 0 1.5 0v-3.75a.75.75 0 0 0-1.5 0z"></path></svg>
                          </span>
                            Media & Technology
                        </div>
                      </div>
                    </div>
                    <ul className={style.facility_list_container}>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Flat-screen TV</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Cable channels</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Telephone</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block">
                  <div className={style.item}>
                    <div className={style.facility_title_container}>
                      <div className={style.font_1}>
                        <div className={style.facility_label}>
                          <span className={style.facility_icon_container}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.999.75v22.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm3 0V7.5a2.259 2.259 0 0 1-2.252 2.25 2.258 2.258 0 0 1-2.248-2.252V.75a.75.75 0 0 0-1.5 0V7.5a3.76 3.76 0 0 0 3.748 3.75 3.76 3.76 0 0 0 3.752-3.748V.75a.75.75 0 0 0-1.5 0zm6.75 15.75h3c1.183.046 2.203-.9 2.25-2.111a2.22 2.22 0 0 0 0-.168c-.25-6.672-.828-9.78-3.231-13.533a1.508 1.508 0 0 0-2.77.81V23.25a.75.75 0 0 0 1.5 0V1.503c0 .003.001 0 .003 0a.006.006 0 0 1 .008.002c2.21 3.45 2.75 6.354 2.99 12.773v.053a.696.696 0 0 1-.721.67L15.749 15a.75.75 0 0 0 0 1.5z"></path></svg>
                          </span>
                            Food & Drink
                        </div>
                      </div>
                    </div>
                    <ul className={style.facility_list_container}>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Restaurant</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Bar</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Special diet menus (on request)</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block">
                  <div className={style.item}>
                    <div className={style.facility_title_container}>
                      <div className={style.font_1}>
                        <div className={style.facility_label}>
                          <span className={style.facility_icon_container}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"></path></svg>
                          </span>
                            Parking
                        </div>
                      </div>
                    </div>
                    <ul className={style.facility_list_container}>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Accessible parking</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block">
                  <div className={style.item}>
                    <div className={style.facility_title_container}>
                      <div className={style.font_1}>
                        <div className={style.facility_label}>
                          <span className={style.facility_icon_container}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.244 14.156a6.75 6.75 0 0 0-6.75-5.906A6.747 6.747 0 0 0 .73 14.397a.75.75 0 0 0 1.494.134 5.25 5.25 0 0 1 5.27-4.781 5.253 5.253 0 0 1 5.262 4.594.75.75 0 1 0 1.488-.188zM10.125 4.125a2.625 2.625 0 1 1-5.25 0V1.5h5.25v2.625zm1.5 0V1.5a1.5 1.5 0 0 0-1.5-1.5h-5.25a1.5 1.5 0 0 0-1.5 1.5v2.625a4.125 4.125 0 0 0 8.25 0zM23.25 22.5H.75l.75.75v-7.5a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v7.5l.75-.75zm0 1.5a.75.75 0 0 0 .75-.75v-7.5a2.25 2.25 0 0 0-2.25-2.25H2.25A2.25 2.25 0 0 0 0 15.75v7.5c0 .414.336.75.75.75h22.5zM4.376 5.017a9.42 9.42 0 0 1 3.12-.517 9.428 9.428 0 0 1 3.133.519.75.75 0 0 0 .49-1.418A10.917 10.917 0 0 0 7.498 3a10.91 10.91 0 0 0-3.611.6.75.75 0 0 0 .49 1.417zM15.75 14.27a3.001 3.001 0 0 1 6 .16.75.75 0 1 0 1.5.04 4.501 4.501 0 1 0-9-.24.75.75 0 1 0 1.5.04zm3.75-3.77V8.25a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0zM17.25 9h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5z"></path></svg>
                          </span>
                            Reception Services
                        </div>
                      </div>
                    </div>
                    <ul className={style.facility_list_container}>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>24-hour front desk</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Express check-in/check-out</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block">
                  <div className={style.item}>
                    <div className={style.facility_title_container}>
                      <div className={style.font_1}>
                        <div className={style.facility_label}>
                          <span className={style.facility_icon_container}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 12v9.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75V12zm1.5 0V2.25A2.25 2.25 0 0 0 20.25 0H3.75A2.25 2.25 0 0 0 1.5 2.25v19.5A2.25 2.25 0 0 0 3.75 24h16.5a2.25 2.25 0 0 0 2.25-2.25V12zM5.25 4.5h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5zm-3 3h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5zM16.5 15a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zm1.5 0a6 6 0 1 0-12 0 6 6 0 0 0 12 0zm0-10.875a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm-4.5 0a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zM10.5 15a1.5 1.5 0 0 1 1.5-1.5.75.75 0 0 0 0-1.5 3 3 0 0 0-3 3 .75.75 0 0 0 1.5 0z"></path></svg>
                          </span>
                            Cleaning Services
                        </div>
                      </div>
                    </div>
                    <ul className={style.facility_list_container}>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Ironing service (Additional charge)</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Express check-in/check-out</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block">
                  <div className={style.item}>
                    <div className={style.facility_title_container}>
                      <div className={style.font_1}>
                        <div className={style.facility_label}>
                          <span className={style.facility_icon_container}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.5 16.5v5.25a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75v-10.5a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75v5.25zm1.5 0v-5.25A2.25 2.25 0 0 0 18.75 9H5.25A2.25 2.25 0 0 0 3 11.25v10.5A2.25 2.25 0 0 0 5.25 24h13.5A2.25 2.25 0 0 0 21 21.75V16.5zM7.5 9.75V6a4.5 4.5 0 0 1 9 0v3.75a.75.75 0 0 0 1.5 0V6A6 6 0 0 0 6 6v3.75a.75.75 0 0 0 1.5 0zM12 15a1.125 1.125 0 1 0 .004 0h-.006a.75.75 0 0 0 .004 1.5H12a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5z"></path></svg>
                          </span>
                            Safety & security
                        </div>
                      </div>
                    </div>
                    <ul className={style.facility_list_container}>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Fire extinguishers</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>CCTV in common areas</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Smoke alarms</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Security alarm</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Key card access</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="block">
                  <div className={style.item}>
                    <div className={style.facility_title_container}>
                      <div className={style.font_1}>
                        <div className={style.facility_label}>
                          <span className={style.facility_icon_container}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 13.5a6 6 0 0 0-6-6h-3a6 6 0 0 0 0 12h.75l-.53-.22 4.5 4.5a.75.75 0 0 0 1.28-.53v-5.024l-.43.678A5.989 5.989 0 0 0 24 13.502zm-1.5-.002a4.489 4.489 0 0 1-2.57 4.05.75.75 0 0 0-.43.678v5.024l1.28-.53-4.5-4.5a.75.75 0 0 0-.53-.22H15a4.5 4.5 0 1 1 0-9h3a4.5 4.5 0 0 1 4.5 4.5zM6.22 12.22l-3 3 1.28.53v-5.024a.75.75 0 0 0-.43-.678A4.489 4.489 0 0 1 5.998 1.5H9a4.502 4.502 0 0 1 4.313 3.214.75.75 0 0 0 1.438-.428A6.002 6.002 0 0 0 9 0H6a5.988 5.988 0 0 0-2.57 11.404L3 10.726v5.024a.75.75 0 0 0 1.28.53l3-3a.75.75 0 1 0-1.06-1.06z"></path></svg>
                          </span>
                            Languages spoken
                        </div>
                      </div>
                    </div>
                    <ul className={style.facility_list_container}>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>English</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Pidgin</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Yoruba</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Igbo</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Hausa</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className={style.facility_item}>
                        <div>
                          <div className={style.facility_item_content}>
                            <span className={style.facility_icon_container}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path></svg>
                            </span>
                            <div>
                              <span>
                                <div className={style.font_2}>
                                  <span className={style.facility_item_item}>Ishua</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export { Facilities };
